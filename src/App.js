import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😊": "Smiling Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "🥲": "Smiling Face with Tear",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "😮‍💨": "Face Exhaling",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "😵‍💫": "Face with Spiral Eyes",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "🥸": "Disguised Face",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "☹️": "Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "🥺": "Pleading Face",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😡": "Pouting Face",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "😈": "Smiling Face with Horns",
  "👿": "Angry Face with Horns",
  "💀": "Skull",
  "☠️": "Skull and Crossbones",
  "💩": "Pile of Poo",
  "🤡": "Clown Face",
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🔥": "Fire",
  "👹": "Ogre",
  "👺": "Goblin",
  "👻": "Ghost",
  "👽": "Alien",
  "👾": "Alien Monster",
  "🤖": "Robot",
  "😺": "Grinning Cat",
  "😸": "Grinning Cat with Smiling Eyes",
  "😹": "Cat with Tears of Joy",
  "😻": "Smiling Cat with Heart-Eyes",
  "😼": "Cat with Wry Smile",
  "😽": "Kissing Cat",
  "🙀": "Weary Cat",
  "😿": "Crying Cat",
  "😾": "Pouting Cat",
  "💋": "Kiss Mark",
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "OK Hand",
  "🖐": "Hand with Fingers Splayed",
  "🤌": "Pinched Fingers",
  "🤏": "Pinching Hand",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call Me Hand",
  "👈": "Backhand Index Pointing Left",
  "👉": "Backhand Index Pointing Right",
  "👆": "Backhand Index Pointing Up",
  "🖕": "Middle Finger",
  "👇": "Backhand Index Pointing Down",
  "☝️": "Index Pointing Up",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "🤛": "Left-Facing Fist",
  "🤜": "Right-Facing Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "👐": "Open Hands",
  "🤲": "Palms Up Together",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "💅": "Nail Polish",
  "🤳": "Selfie",
  "💪": "Flexed Biceps",
  "🦾": "Mechanical Arm",
  "🦿": "Mechanical Leg",
  "🦵": "Leg",
  "✍️": "Writing Hand",
  "🦶": "Foot",
  "👂": "Ear",
  "🦻": "Ear with Hearing Aid",
  "👃": "Nose",
  "🧠": "Brain",
  "❤️🔥": "Heart on fire",
  "🦷": "Tooth",
  "🦴": "Bone",
  "👀": "Eyes",
  "👁": "Eye",
  "👅": "Tongue",
  "👄": "Mouth",
  "👶": "Baby",
  "🧒": "Child",
  "👦": "Boy",
  "👧": "Girl",
  "🧑": "Person",
  "👱": "Person: Blond Hair",
  "👨": "Man",
  "🧔": "Person: Beard",
  "👨‍🦰": "Man: Red Hair",
  "👨‍🦱": "Man: Curly Hair",
  "👨‍🦳": "Man: White Hair",
  "👨‍🦲": "Man: Bald",
  "👩": "Woman",
  "👩‍🦰": "Woman: Red Hair",
  "🧑‍🦰": "Person: Red Hair",
  "👩🦱": "Woman: Curly Hair",
  "🧑‍🦱": "Person: Curly Hair",
  "👩‍🦳": "Woman: White Hair",
  "🧑‍🦳": "Person: White Hair",
  "👩‍🦲": "Woman: Bald",
  "🧑‍🦲": "Person: Bald",
  "👱‍♀️": "Woman: Blond Hair",
  "👱‍♂️": "Man: Blond Hair",
  "🧓": "Older Person",
  "👴": "Old Man",
  "👵": "Old Woman"
};

const popularEmoji = {
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🔥": "Fire",
  "🥺": "Pleading Face",
  "😂": "Face with Tears of Joy",
  "😊": "Smiling Face with Smiling Eyes",
  "🥰": "Smiling Face with Hearts"
};

var emojiWeknow = Object.keys(popularEmoji);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We are sorry but we don't have this emoji in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = popularEmoji[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji Interpreter </h1>
      <input
        onChange={emojiInputHandler}
        placeholder="put an emoji here to know the meaning"
      />
      <div>
        {" "}
        <h2>{meaning}</h2>{" "}
      </div>

      <div style={{ padding: "9rem" }}>
        <h2> Some popular emojis </h2>
        {emojiWeknow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: "0.5rem 0.5rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
