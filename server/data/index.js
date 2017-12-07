
let quizdata = {
    get : (id) => {
        return new Promise((resolve, reject) => {            
            if(_quizdata[id]){
                resolve(_quizdata[id]);
            } else {
                reject();
            }
        })       
    },
    set : (id, json) => {
        return new Promise((resolve, reject) => {
            console.log(`id: ${id}`);
            console.log(json);
            
            if(_quizdata[id]) {
                _quizdata[id] = json;
                console.log(_quizdata[id]);
                
                resolve(true);
            } else {
                reject();
            }
        })    
    }
}
let _quizdata = {
    general: {
        "id": "quiz-general-knowledge",
        "name": "Allmänbildning",
        "subject_id": "misc",
        "subject": "Blandat",
        "level": "1A",
        "demo_mode": true,
        "questions" : [
            { "id": "1",
              "type": "single-option",
              "image_source": "../static/html/quiz/image_jl.jpg",
              "question": "Vem är personen på bilden",
              "options" : [
                    {	"id": "option1",
                        "text": "Geroge Harrison"
                    },
                    {	"id": "option2",
                        "text": "Paul McCartney"
                    },
                    {	"id": "option3",
                        "text": "John Lennon"
                    },
                    {	"id": "option4",
                        "text": "Ringo Starr"
                    }
                ],
              "answer": "option3"
            },
            { "id": "2",
              "type": "multiple-option",
              "image_source": "../static/html/quiz/image_js.jpg",
              "question": "Vilka påståenden är sanna om Javascript?",
              "options": [
                {	"id": "option1",
                    "text": "Javascript kopileras till byte-kod"},
                {	"id": "option2",
                    "text": "Javascript är ett ECMAScript"},
                {	"id": "option3",
                    "text": "Javascript och Java är samma språk"},
                {	"id": "option4",
                    "text": "Javascript är objekt-orienterat"}
                ],
              "answer": ["option2", "option4"],
            },
            { "id": "3",
              "type": "single-option",
              "image_source": "../static/html/quiz/image_mandelbrot.jpg",
              "question": "Vem är personen på bilden?",
             "options" : [
                    {	"id": "option1",
                        "text": "Beniot Mandlebrot"
                    },
                    {	"id": "option2",
                        "text": "Winston Churchill"
                    },
                    {	"id": "option3",
                        "text": "Henry Kissinger"
                    },
                    {	"id": "option4",
                        "text": "Niklas Sundbaum"
                    }
                ],
              "answer": "option1"
            },
        ]
    }
}

module.exports = quizdata;