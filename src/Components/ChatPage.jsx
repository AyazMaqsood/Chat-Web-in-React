import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaPhoneAlt, FaVideo, FaMicrophone, FaArrowLeft } from "react-icons/fa";

const ChatPage = () => {
  const location = useLocation();
  const username = location.state?.username || "User";

  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 900);

  
  const [chats, setChats] = useState({
    "Ahmed Khan": [
      { text: "Hey there!", type: "received" },
      { text: "How are you?", type: "received" },
      { text: "I'm fine, what about you?", type: "sent" },
    ],
    "Ali Raza": [
      { text: "Hello bro!", type: "received" },
      { text: "Let's meet tomorrow.", type: "received" },
      { text: "Sure!", type: "sent" },
    ],
    "Bilal Ahmed": [
      { text: "Hi Bilal!", type: "sent" },
      { text: "Hey Ayaz! Long time!", type: "received" },
    ],
    "Hassan Nawaz": [
      { text: "Are you coming today?", type: "received" },
      { text: "Yes, in an hour.", type: "sent" },
    ],
    "Usman Malik": [
      { text: "Meeting postponed to 5 PM.", type: "received" },
      { text: "Okay, thanks for the update.", type: "sent" },
    ],
    "Hamza Tariq": [
      { text: "Hey, check your email.", type: "received" },
      { text: "Sure, will do now.", type: "sent" },
    ],
    "Zain Ali": [
      { text: "Can you share the file?", type: "received" },
      { text: "Yes, sending it right now.", type: "sent" },
    ],
    "Danish Iqbal": [
      { text: "Let's go out for lunch?", type: "received" },
      { text: "Good idea!", type: "sent" },
    ],
    "Rehan Butt": [
      { text: "You free this weekend?", type: "received" },
      { text: "Yeah, let's plan something.", type: "sent" },
    ],
    "Muneeb Aslam": [
      { text: "Can you review my code?", type: "received" },
      { text: "Sure, send the link.", type: "sent" },
    ],
    "Saqib Ali": [
      { text: "What's the WiFi password?", type: "received" },
      { text: "Check under the router.", type: "sent" },
    ],
    "Adeel Ahmed": [
      { text: "Did you finish the report?", type: "received" },
      { text: "Almost done.", type: "sent" },
    ],
    "Fahad Iqbal": [
      { text: "Happy Birthday bro!", type: "received" },
      { text: "Thanks a lot!", type: "sent" },
    ],
    "Rashid Mehmood": [
      { text: "Join the meeting now.", type: "received" },
      { text: "On my way.", type: "sent" },
    ],
    "Noman Khan": [
      { text: "Need your help with JavaScript.", type: "received" },
      { text: "Sure, tell me the issue.", type: "sent" },
    ],
    "Imran Abbas": [
      { text: "Where are you?", type: "received" },
      { text: "Just reached office.", type: "sent" },
    ],
    "Tariq Javed": [
      { text: "Let's start the new project.", type: "received" },
      { text: "Alright, I’m in.", type: "sent" },
    ],
    "Sami Ullah": [
      { text: "Lunch break?", type: "received" },
      { text: "Yeah, let’s go!", type: "sent" },
    ],
    "Haider Ali": [
      { text: "Send the presentation.", type: "received" },
      { text: "Uploading now.", type: "sent" },
    ],
    "Zeeshan Akhtar": [
      { text: "Game night today?", type: "received" },
      { text: "Count me in!", type: "sent" },
    ],
    "Amir Sohail": [
      { text: "Call me when you're free.", type: "received" },
      { text: "Sure, will call in 10 min.", type: "sent" },
    ],
    "Asad Baig": [
      { text: "Did you check the assignment?", type: "received" },
      { text: "Yes, looks good.", type: "sent" },
    ],
    "Kashif Raza": [
      { text: "How’s your new job?", type: "received" },
      { text: "Going great, thanks!", type: "sent" },
    ],
    "Faraz Anwar": [
      { text: "Movie night?", type: "received" },
      { text: "I’m in!", type: "sent" },
    ],
    "Salman Tariq": [
      { text: "Can we talk now?", type: "received" },
      { text: "Yes, calling you.", type: "sent" },
    ],
    "Ahsan Javed": [
      { text: "Check your inbox.", type: "received" },
      { text: "Got it, thanks.", type: "sent" },
    ],
    "Hammad Arif": [
      { text: "When’s the deadline?", type: "received" },
      { text: "Tomorrow 5 PM.", type: "sent" },
    ],
    "Kamran Khan": [
      { text: "Did you submit the form?", type: "received" },
      { text: "Just did.", type: "sent" },
    ],
    "Waqar Ali": [
      { text: "Congrats on your promotion!", type: "received" },
      { text: "Thank you!", type: "sent" },
    ],
    "Naveed Aslam": [
      { text: "Let’s go for a walk.", type: "received" },
      { text: "Sure, in 10 minutes.", type: "sent" },
    ],
  });

  
  const chatList = Object.keys(chats);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSend = () => {
    if (!message.trim() || !selectedChat) return;
    const newMessage = { text: message, type: "sent" };
    const updatedChat = [...(chats[selectedChat] || []), newMessage];
    setChats({ ...chats, [selectedChat]: updatedChat });
    setMessage("");
  };

  const handleBack = () => setSelectedChat(null);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#f2f2f2",
        fontFamily: "Arial, sans-serif",
      }}
    >
     
      {(!isMobileView || (isMobileView && !selectedChat)) && (
        <div
          style={{
            width: isMobileView ? "100%" : "30%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              margin: "10px 0",
              color: "#333",
              borderBottom: "1px solid #ddd",
              paddingBottom: "5px",
            }}
          >
            Chats
          </h3>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "10px",
            }}
          >
            {chatList.map((chat, index) => (
              <div
                key={index}
                onClick={() => setSelectedChat(chat)}
                style={{
                  padding: "10px",
                  margin: "5px 0",
                  backgroundColor:
                    selectedChat === chat ? "#e1f5fe" : "#fff",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border:
                    selectedChat === chat
                      ? "2px solid #2196f3"
                      : "1px solid #ddd",
                  transition: "0.2s",
                }}
              >
                {chat}
              </div>
            ))}
          </div>

          <div
            style={{
              padding: "10px",
              borderTop: "1px solid #ddd",
              textAlign: "center",
              backgroundColor: "#fafafa",
              fontSize: "14px",
              color: "#555",
            }}
          >
            Logged in as: <strong>{username}</strong>
          </div>
        </div>
      )}

      
      {(!isMobileView || (isMobileView && selectedChat)) && (
        <div
          style={{
            flex: 1,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            borderLeft: !isMobileView ? "1px solid #ddd" : "none",
          }}
        >
         
          <div
            style={{
              padding: "10px 15px",
              backgroundColor: "#128C7E",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {isMobileView && (
                <FaArrowLeft
                  onClick={handleBack}
                  style={{
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                />
              )}
              <h3 style={{ margin: 0, fontSize: "18px" }}>
                {selectedChat ? selectedChat : "Select a chat"}
              </h3>
            </div>

            <div style={{ display: "flex", gap: "15px", fontSize: "18px" }}>
              <FaMicrophone style={{ cursor: "pointer" }} />
              <FaPhoneAlt style={{ cursor: "pointer" }} />
              <FaVideo style={{ cursor: "pointer" }} />
            </div>
          </div>

         
          <div
            style={{
              flex: 1,
              padding: "20px",
              overflowY: "auto",
              backgroundColor: "#f7f7f7",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {selectedChat ? (
              chats[selectedChat]?.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    alignSelf:
                      msg.type === "sent" ? "flex-end" : "flex-start",
                    backgroundColor:
                      msg.type === "sent" ? "#dcf8c6" : "#fff",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    margin: "5px 0",
                    maxWidth: "75%",
                    wordWrap: "break-word",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  {msg.text}
                </div>
              ))
            ) : (
              <p style={{ color: "#888" }}>Select a chat to start conversation</p>
            )}
          </div>

         
          {selectedChat && (
            <div
              style={{
                padding: "10px",
                borderTop: "1px solid #ddd",
                display: "flex",
                gap: "10px",
              }}
            >
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "20px",
                  border: "1px solid #ccc",
                  outline: "none",
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                style={{
                  backgroundColor: "#128C7E",
                  color: "white",
                  padding: "8px 15px",
                  border: "none",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatPage;
