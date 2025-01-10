import { connect } from "react-redux";
import handleInitialData from "../actions/shared";
import { useEffect, Fragment, useState } from "react";
import Dashboard from "./Uhf";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import TweetPage from "./TweetPage";
import MainDashboard from "./Dashboard";
import Ble from "./Ble";
import Images from "./Images";
import Qr from "./Qr";
import Qr2 from "./Qr2";
import Qr3 from "./Qr3";
import mqtt from "mqtt";


const App = (props) => {
  const [client, setClient] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [occupancy, setOccupancy] = useState(0);
  const [entryCounter, setEntryCounter] = useState(0);
  const [exitCounter, setExitCounter] = useState(0);

  const brokerUrl = "ws://192.168.1.6:5000/mqtt"; // Use WebSocket URL for MQTT
useEffect(() => {
  // Connect to the MQTT broker
  const mqttClient = mqtt.connect(brokerUrl);
  const occupancyTopic = "looper/onvif-ej/RuleEngine/CountAggregation/OccupancyCounter/&1/Occupancy";
  const entryCounterTopic = "looper/onvif-ej/RuleEngine/CountAggregation/Counter/&1/Entry Counter";
  const exitCounterTopic = "looper/onvif-ej/RuleEngine/CountAggregation/Counter/&1/Exit Counter";
  // Connection callback
  mqttClient.on("connect", () => {
    console.log("Connected to broker");
    setIsConnected(true);

    // Subscribe to a topic
    mqttClient.subscribe(occupancyTopic, (err) => {
      if (!err) {
        console.log("Subscribed to topic: test/topic");
      }
    });
     mqttClient.subscribe(
       entryCounterTopic,
       (err) => {
         if (!err) {
           console.log("Subscribed to topic: test/topic");
         }
       }
    );
         mqttClient.subscribe(
           exitCounterTopic,
           (err) => {
             if (!err) {
               console.log("Subscribed to topic: test/topic");
             }
           }
         );
  });

  // Handle incoming messages
  mqttClient.on("message", (topic, message) => {
    console.log(`Message received on topic ${topic}: ${message.toString()}`);
    if (topic === occupancyTopic) {
      //{ "UtcTime": "2024-07-03T10:37:18.203Z","Source":{"VideoSource": "1","Rule": "Occupancy"},"Data":{"Count": "0"}}
      const data = JSON.parse(message.toString());
      setOccupancy(data.Data.Count);
    }
    if (topic === entryCounterTopic) {
      //{ "UtcTime": "2024-07-03T10:37:18.203Z","Source":{"VideoSource": "1","Rule": "Occupancy"},"Data":{"Count": "0"}}
      const data = JSON.parse(message.toString());
      setEntryCounter(data.Data.Count);
    }
    if (topic === exitCounterTopic) {
      //{ "UtcTime": "2024-07-03T10:37:18.203Z","Source":{"VideoSource": "1","Rule": "Occupancy"},"Data":{"Count": "0"}}
      const data = JSON.parse(message.toString());
      setExitCounter(data.Data.Count);
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      { topic, message: message.toString() },
    ]);
  });

  // Error callback
  mqttClient.on("error", (err) => {
    console.error("MQTT connection error:", err);
  });

  // Disconnect callback
  mqttClient.on("close", () => {
    console.log("Disconnected from broker");
    setIsConnected(false);
  });

  setClient(mqttClient);

  // Cleanup on component unmount
  return () => {
    mqttClient.end();
  };
}, []);
  
  const publishMessage = (topic, message) => {
    if (client && isConnected) {
      client.publish(topic, message);
      console.log(`Message published to ${topic}: ${message}`);
    } else {
      console.log("Client not connected");
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      loadData();
    }, 1000);

    // Cleanup the interval on unmount or when dependencies change
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once

  const playAudio = () => {
    try {
      // const audio = new Audio("./error.wav");
      // audio.play();
      const audio2 = new Audio("../../error.wav");
      audio2.play();
    } catch (e) {
      console.log(e);
    }
  };

  var loadData = () => {
    try {
      //
      fetch("http://192.168.1.6:5000/api/data").then((response) => {
        //console.log(response);
        console.log("interval with data");
        response.json().then((result) => {
          //console.log(result);
          props.dispatch(handleInitialData(result));
          if (result.uhf.alerts > 0) {
            playAudio();
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Fragment>
      <div>
        <div className="row ">
          <div>
            <div className="row main-row">
              <div className="col-4">
                <img src="newlogo.png" alt="logo" className="new-logo" />
              </div>
              <div className="col-4">
                <h2>مخيم تجريبي</h2>
              </div>
              <div className="col-4">
                {props.uhf.alerts > 0 && (
                  <div className="alert alert-danger">دخول غير مصرح به</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row main-content">
          {/* <Nav /> */}
          <div className="row">
            <div>
              <h2>عداد الاشخاص: {isConnected ? "متصل" : "غير متصل"}</h2>
              <div className="row">
                <div className="col-3">
                  <div className="entry">
                    <h2>دخول</h2>
                    <span className="large-counter"> {entryCounter}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="occupancy">
                    <h2>انتظار</h2>
                    <span className="large-counter"> {occupancy}</span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="exit">
                    <h2>خروج</h2>
                    <span className="large-counter"> {exitCounter}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {props.loading === true ? null : (
            <Routes>
              <Route path="/" exact element={<MainDashboard />} />
              <Route path="/full" exact element={<Dashboard />} />
              <Route path="/ble" element={<Ble />} />
              <Route path="/images" element={<Images />} />
              <Route path="/qr" element={<Qr />} />
              <Route path="/qr2" element={<Qr2 />} />
              <Route path="/qr3" element={<Qr3 />} />
              <Route path="/tweet/:id" element={<TweetPage />} />
            </Routes>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ uhf }) => {
  return {
    uhf,
    loading: false,
  };
};

export default connect(mapStateToProps)(App);
