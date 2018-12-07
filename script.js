
        var questionIndex;
        var correct;
        var wrong;

        var questions = [
            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tmOpyuTwntaOi3x-9QFR6zq3gTBVBznElP1rMomXjdM2tOHD ",
                value: "Պարույր Սևակ",
                buttons: [{
                    value: "Եղիշե Չարենց",
                    label: "Եղիշե Չարենց"
                }, {
                    value: "Պետրոս Դուրյան",
                    label: "Պետրոս Դուրյան"
                }, {
                    value: "Պարույր Սևակ",
                    label: "Պարույր Սևակ"
                }, {
                    value: "Ղևոնդ Ալիշյան",
                    label: "Ղևոնդ Ալիշյան"
                }]

            },
            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10adffEA96rARYF4qZuQKKKwwrVE77uXmUNaNjp7xgwv6LFDT",
                value: "Գալյա Նովենց",
                buttons: [{
                    value: "Կարինե Սուքիասյան",
                    label: "Կարինե Սուքիասյան"
                }, {
                    value: "Մետաքսյա Սիմոնյան",
                    label: "Մետաքսյա Սիմոնյան"
                }, {
                    value: "Գալյա Նովենց",
                    label: "Գալյա Նովենց"
                }, {
                    value: "Ժենյա Ավետիսյան",
                    label: "Ժենյա Ավետիսյան"
                }]
            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhvO10TV4xwA6-mGzJPdS4zmEepDIm74lfU6q_RetCYMhvTO5",
                value: "Շառլ Ազնավուր",
                buttons: [{
                    value: "Շառլ Ազնավուր",
                    label: "Շառլ Ազնավուր"
                }, {
                    value: "Արմեն Ջիգարխանյան",
                    label: "Արմեն Ջիգարխանյան"
                }, {
                    value: "Կարեն Ջանիբեկյան",
                    label: "Կարեն Ջանիբեկյան"
                }, {
                    value: "Ջիվան Գասպարյան",
                    label: "Ջիվան Գասպարյան"
                }]


            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwTeO30RWsUiIoK77zPpCbfesWq34UNSwg0frL7aaSzCP4Uxplg",
                value: "Արթուր Մեսչյան",
                buttons: [{
                    value: "Ռուբեն Հախվերդյան",
                    label: "Ռուբեն Հախվերդյան"
                }, {
                    value: "Ռուբեն Մեսչյան",
                    label: "Ռուբեն Մեսչյան"
                }, {
                    value: "Մարտին Միքայելյան",
                    label: "Մարտին Միքայելյան"
                }, {
                    value: "Արթուր Մեսչյան",
                    label: "Արթուր Մեսչյան"
                }]

            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3RPu_MWnhcrVWvlpDRYlOQJ9Zb2UcmxHsn7LCnyr8-Z4LPcTBQ",
                value: "Վիլյամ Սարոյան",
                buttons: [{
                    value: "Խորեն Գասպարյան",
                    label: "Խորեն Գասպարյան"
                }, {
                    value: "Հովիկ Էդգարյան",
                    label: "Հովիկ Էդգարյան"
                }, {
                    value: "Վիլյամ Սարոյան",
                    label: "Վիլյամ Սարոյան"
                }, {
                    value: "Մարտիրոս Սարյան",
                    label: "Մարտիրոս Սարյան"
                }]

            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp56IgO9v47VC4f4Mb1e7F8g0-l0WEriO4x9KTDT3qsM1HxBYvBg",
                value: "Հովհաննես Այվազովսկի",
                buttons: [{
                    value: "Վիկտոր Աբրահամյան",
                    label: "Վիկտոր Աբրահամյան"
                }, {
                    value: "Սարգիս Այվազյան",
                    label: "Սարգիս Այվազյան"
                }, {
                    value: "Հովհաննես Այվազովսկի",
                    label: "Հովհաննես Այվազովսկի"
                }, {
                    value: "Լևոն Գենչ",
                    label: "Լևոն Գենչ"
                }]

            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsRSpEcL_aI5C7hLdqr2le18MAm0EhOLz7V39wqn5H3YV-mbA",
                value: "Տիգրան Մանսուրյան",
                buttons: [{
                    value: "Մինաս Ավետիսյան",
                    label: "Մինաս Ավետիսյան"
                }, {
                    value: "Ռուբեն Ալթունյան",
                    label: "Ռուբեն Ալթունյան"
                }, {
                    value: "Խաչատուր Ավետիսյան",
                    label: "Խաչատուր Ավետիսյան"
                }, {
                    value: "Տիգրան Մանսուրյան",
                    label: "Տիգրան Մանսուրյան"
                }]

            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Ki9xoQgZnt5xFR3GBZyNCI6IMUunEaPIgOwwKNN8AXPBt8ZniQ",
                value: "Արշիլ Գորկի",
                buttons: [{
                    value: "Երվանդ Դեմիրճյան",
                    label: "Երվանդ Դեմիրճյան"
                }, {
                    value: "Արշիլ Գորկի",
                    label: "Արշիլ Գորկի"
                }, {
                    value: "Սոս Բաբումյան",
                    label: "Սոս Բաբումյան"
                }, {
                    value: "Պերճ Ակնունի",
                    label: "Պերճ Ակնունի"
                }]

            },

            {
                imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Martiros_Saryan_photo.jpg/230px-Martiros_Saryan_photo.jpg",
                value: "Մարտիրոս Սարյան",
                buttons: [{
                    value: "Մարտիրոս Սարյան",
                    label: "Մարտիրոս Սարյան"
                }, {
                    value: "Հովհաննես Այվազովսկի",
                    label: "Հովհաննես Այվազովսկի"
                }, {
                    value: "Գոռ Ավետիսյան",
                    label: "Գոռ Ավետիսյան"
                }, {
                    value: "Ռաֆայել Ասլանյան",
                    label: "Ռաֆայել Ասլանյան"
                }]

            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRb4H-C9W0ZFEXsLnv__SWhR90o7MMxuOOynKVBF-IyniC9jjevg",
                value: "Մոնթե Մելքոնյան",
                buttons: [{
                    value: "Սողոմոն Թեհլերյան",
                    label: "Սողոմոն Թեհլերյան"
                }, {
                    value: "Մոնթե Մելքոնյան",
                    label: "Մոնթե Մելքոնյան"
                }, {
                    value: "Արայիկ Խանդոյան",
                    label: "Արայիկ Խանդոյան"
                }, {
                    value: "Վազգեն Սարգսյան",
                    label: "Վազգեն Սարգսյան"
                }]

            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXcOLhsT8BZZ1g2uMb9sqxreoi5vydt3w_Gnv_7g8ZjqHEk3cM",
                value: "Քըրք Քըրքորյան",
                buttons: [{
                    value: "Քըրք Քըրքորյան",
                    label: "Քըրք Քըրքորյան"
                }, {
                    value: "Վիկտոր Համբարձումյան",
                    label: "Վիկտոր Համբարձումյան"
                }, {
                    value: "Վլադիմիր Աբրահամյան",
                    label: "Վլադիմիր Աբրահամյան"
                }, {
                    value: "Վարդան Հակոբյան",
                    label: "Վարդան Հակոբյան"
                }]

            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybFDYrmTMEp_-f0pS_PN3RI08t05dxhQXZMhN2jNeiXCS3zTA",
                value: "Հովհաննես Թումանյան",
                buttons: [{
                    value: "Արա Ալոյան",
                    label: "Արա Ալոյան"
                }, {
                    value: "Եղիշե Չարենց",
                    label: "Եղիշե Չարենց"
                }, {
                    value: "Հովհաննես Թումանյան",
                    label: "Հովհաննես Թումանյան"
                }, {
                    value: "Արտեմ Հարությունյան",
                    label: "Արտեմ Հարությունյան"
                }]

            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5mkRPwR0DiJgugAihYkPCbcJkvuxKSUy66i-0WTkCnam2Dr7",
                value: "Սիլվա Կապուտիկյան",
                buttons: [{
                    value: "Սիլվա Կապուտիկյան",
                    label: "Սիլվա Կապուտիկյան"
                }, {
                    value: "Անահիտ Դանիելյան",
                    label: "Անահիտ Դանիելյան"
                }, {
                    value: "Անահիտ Թարյան",
                    label: "Անահիտ Թարյան"
                }, {
                    value: "Սոնյա Պալասանյան",
                    label: "Սոնյա Պալասանյան"
                }]

            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqYK87ho-B9zGKaB6vG8C96OG8qwZIusjoXAP4ZvWYO3RGbTJ",
                value: "Մհեր Մկրտչյան",
                buttons: [{
                    value: "Վլադիմիր Աբաջյան",
                    label: "Վլադիմիր Աբաջյան"
                }, {
                    value: "Խորեն Աբրահամյան",
                    label: "Խորեն Աբրահամյան"
                }, {
                    value: "Հենրիկ Ալավերդյան",
                    label: "Հենրիկ Ալավերդյան"
                }, {
                    value: "Մհեր Մկրտչյան",
                    label: "Մհեր Մկրտչյան"
                }]
            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfZT1YK7gK3wiKofUyy1zQdLSUEQKOBnxsjEcOzNM9MwmxLrrYQ",
                value: "Շերիլին Սարգիսյան",
                buttons: [{
                    value: "Սելին Դիոն",
                    label: "Սելին Դիոն"
                }, {
                    value: "Շերիլին Սարգիսյան",
                    label: "Շերիլին Սարգիսյան"
                }, {
                    value: "Քիմ Քարդաշյան",
                    label: "Քիմ Քարդաշյան"
                }, {
                    value: "Լառա Ֆաբիան",
                    label: "Լառա Ֆաբիան"
                }]

            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWziiQ02U0bY-3dao0I3a4c-aCh39d87eYQxOoKwwN_Wy61Nk3",
                value: "Առնո Բաբաջանյան",
                buttons: [{
                    value: "Խաչատուր Ավետիսյան",
                    label: "Խաչատուր Ավետիսյան"
                }, {
                    value: "Ստեփան Բաբելյան",
                    label: "Ստեփան Բաբելյան"
                }, {
                    value: "Առնո Բաբաջանյան",
                    label: "Առնո Բաբաջանյան"
                }, {
                    value: "Ստեփան Դեմուրյան",
                    label: "Ստեփան Դեմուրյան"
                }]

            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGT_0EMBJ79dCc5f82yNbnCAUQHaB4OCEK5-w4chv9Fp53jLWr",
                value: "Մինաս Ավետիսյան",
                buttons: [{
                    value: "Մինաս Ավետիսյան",
                    label: "Մինաս Ավետիսյան"
                }, {
                    value: "Կառլոս Աբովյան",
                    label: "Կառլոս Աբովյան"
                }, {
                    value: "Կորյուն Աբգարյան",
                    label: "Կորյուն Աբգարյան"
                }, {
                    value: "Կարապետ Ադամյան",
                    label: "Կարապետ Ադամյան"
                }]

            },

            {
                imgSrc: "http://www.encyclopedia.am/upload_files/book_2/letter_25/header_1499/Image_4848.jpg",
                value: "Եղիշե Չարենց",
                buttons: [{
                    value: "Հովհաննես Թումանյան",
                    label: "Հովհաննես Թումանյան"
                }, {
                    value: "Ժակ Հակոբյան",
                    label: "Ժակ Հակոբյան"
                }, {
                    value: "Եղիշե Չարենց",
                    label: "Եղիշե Չարենց"
                }, {
                    value: "Լևոն Կյուրեղյան",
                    label: "Լևոն Կյուրեղյան"
                }]

            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvR9RrCM1uRZdO8q09gxxfXfvw441HTFkwJnecAFBUlZqjt-Ml",
                value: "Սողոմոն Սողոմոնյան",
                buttons: [{
                    value: "Սողոմոն Սողոմոնյան",
                    label: "Սողոմոն Սողոմոնյան"
                }, {
                    value: "Ռոբերտ Պետրոսյան",
                    label: "Ռոբերտ Պետրոսյան"
                }, {
                    value: "Սայաթ-Նովա",
                    label: "Սայաթ-Նովա"
                }, {
                    value: "Ղազարոս Սարյան",
                    label: "Ղազարոս Սարյան"
                }]
            },

            {
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTMKbWvUsv9CXwV1_XgD_5FWVNosBLxr-wfZjpBya3nZsZqMiTw",
                value: "Արսինե Խանջյան",
                buttons: [{
                    value: "Էթերի Ոսկանյան",
                    label: "Էթերի Ոսկանյան"
                }, {
                    value: "Անահիտ Կիրակոսյան",
                    label: "Անահիտ Կիրակոսյան"
                }, {
                    value: "Արփինե Իսրայելյան",
                    label: "Արփինե Իսրայելյան"
                }, {
                    value: "Արսինե Խանջյան",
                    label: "Արսինե Խանջյան"
                }]
            }
        ];
		
		var setCorrectAndWrongAnswers = function(correct, wrong) {			
             var div = document.getElementById('corrects');
             div.innerHTML = correct;
             var div = document.getElementById('wrongs');
             div.innerHTML = wrong;
		}

        var startGame = function () {
            questionIndex = 0;
            correct = 0;
            wrong = 0;
			setCorrectAndWrongAnswers(correct, wrong);
            document.getElementById('btn').style.display = 'none';
            document.getElementById('bg').style.display = 'none';
            document.getElementById('container').style.display = 'block';
            document.getElementById("question").style.display = "block";
            loadQuestion(0);
        }

        var loadQuestion = function (indexOfQuestion) {
            document.getElementById('imgImage').src = questions[questionIndex].imgSrc;
            document.getElementById('aa').innerHTML = questions[questionIndex].buttons[0].label;
            document.getElementById('ab').innerHTML = questions[questionIndex].buttons[1].label;
            document.getElementById('ac').innerHTML = questions[questionIndex].buttons[2].label;
            document.getElementById('ad').innerHTML = questions[questionIndex].buttons[3].label;
        }

        var answerQuestion = function (answerGiven) {
            if (document.getElementById(answerGiven).innerHTML === questions[questionIndex].value) {
                correct = correct + 1;
            } else {
                wrong = wrong + 1;
            }
			setCorrectAndWrongAnswers(correct, wrong);
            if (questionIndex != questions.length - 1) {
                questionIndex++;
                loadQuestion(questionIndex);
            } else {
                document.getElementById("question").style.display = "none";
                document.getElementById("bg").innerText = "ԽԱՂԻ ԱՐԴՅՈՒՆՔՆԵՐՆ ԵՆ՝";
                document.getElementById('bg').style.display = 'block';
                document.getElementById("btn").innerText = "ՓՈՐՁԵԼ ԿՐԿԻՆ";
                document.getElementById("btn").style.display = 'block';
            }
        }
