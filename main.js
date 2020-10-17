Webcam.set({
width:350,
height:280,
image_format:'png',
png_quality:90
});

Camera = document.getElementById("Camera");
Webcam.attach('#Camera');
function Take_Snapshot()
{
Webcam.snap(function(data_url){
    document.getElementById("Result").innerHTML = '<img id = "Captured_Img" src = "'+data_url+'">';
});
}
console.log('Ml5 version: ', ml5.version);

Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HBq0jm8KQ/model.json' , Model_Loaded);
function Model_Loaded()
{
console.log('Model is loaded');
}

function Check()
{
    img = document.getElementById("Captured_Img");
    Classifier.classify(img , GotResult); 
}

function GotResult(error , results)
{
   if (error) {
       console.error(error);
   } 
   else 
   {
       console.log(results);
       document.getElementById("Result_Emotion_Name_1").innerHTML = results[0].label;
       document.getElementById("Result_Emotion_Name_2").innerHTML = results[1].label;
       if (results[0].label == "Happy") {
           document.getElementById("Update_Emoji_1").innerHTML = "😀";
       }

       if (results[0].label == "Sad") {
        document.getElementById("Update_Emoji_1").innerHTML = "🙁";
       }

       if (results[0].label == "Angry") {
        document.getElementById("Update_Emoji_1").innerHTML = "😡";
    }




    if (results[1].label == "Happy") {
           document.getElementById("Update_Emoji_2").innerHTML = "😀";
       }

       if (results[1].label == "Sad") {
        document.getElementById("Update_Emoji_2").innerHTML = "🙁";
       }

       if (results[1].label == "Angry") {
        document.getElementById("Update_Emoji_2").innerHTML = "😡";
    }
   }
}