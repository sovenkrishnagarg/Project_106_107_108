function startClassification(){
    navigator.mediaDevice.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jYOxWtjfc/', modelReady);
};

function modelReady(){
    classifier.classify(gotResults);
};

function gotResults(){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 225)+1;
        random_number_b = Math.floor(Math.random() * 225)+1;
        random_number_g = Math.floor(Math.random() * 225)+1;
        document.getElementById("result_label").innerHTML += results[0].label;
        document.getElementById("result_confidence").innerHTML += (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img = document.getElementById('alien_1');
        if(results[0].label == "Barking"){
            img = 'images.jpg';
        }
        else if(results[0].label == "Meowing"){
            img = 'images3.jpg'
        }
        else if(results.label[0] == "Mooing"){
            img = 'images (1).jpg'
        }
        else{
            img1 = 'images (2).jpg';
        }
    };
};