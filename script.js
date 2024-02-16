        class Second {
            constructor() {}
            hours(hours) {
                if (hours > 12) {
                    hours -= 12;
                }
                const hoursinsecond = hours * 3600;
                console.log("Hour in sec " + hoursinsecond)
                const hourposition = hoursinsecond * 0.00833333333;
                return hourposition;
            }
            minutes(minutes) {
                const minutesinsecond = minutes * 60;
                const minutesposition = minutesinsecond * 0.1;
                return minutesposition;
            }
            seconds(seconds) {
                return seconds * 6;
            }
        }

        let tic = document.getElementById("tic");
        tic.src = "tic.wav";
        window.addEventListener('DOMContentLoaded', (event) => {
         tic.play()
        })
        function setPosition(position, check) {
            if (check == 'hours') {
                const minutePosition = atos.minutes(minute) / 360;
                // Convert minutes to fraction of a full rotation (360 degrees)
                position += minutePosition * 30;
                // Each minute advances the hour hand by 0.5 degrees
            }
            var endPosition = position + 360;
            let styleElement = document.createElement('style');
            styleElement.innerHTML = `        @keyframes ${check} {
            0% {
            transform: rotate(${position}deg);
            } 100% {
            transform: rotate(${endPosition}deg);
            }
            }`;
            document.head.appendChild(styleElement);
            if (check == 'hours') {
                document.getElementById('hours').style.animation = 'hours 43200s linear infinite';
            } else if (check == 'seconds') {
                let anim = 'seconds 60s steps(60) infinite';
                // Change the value of the custom property --anime
                document.documentElement.style.setProperty('--anime', anim);
                document.getElementById('seconds').style.animation = anim;
            } else {
                document.getElementById('minutes').style.animation = 'minutes 3600s linear infinite';
            }
        }

        const time = new Date();
        const hour = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds();
        const miliSecond = time.getMilliseconds();
        const atos = new Second();
        setPosition(atos.hours(hour), 'hours');
        setPosition(atos.seconds(second), 'seconds');
        setPosition(atos.minutes(minute), 'minutes');
        var hour2 = (hour > 12)?hour-12: hour;
        digital(hour2, minute, second);


        // alert(hourposition);
        //function for controlling digital time
        function digital(hour, minute, second) {
            let h = document.getElementById('h');
            let m = document.getElementById('m');
            let s = document.getElementById('s');
            //  var time = new Date();
            //            time.getHours();
            //    time.getMinutes();
            //      time.getSeconds();
            let hour2,
            second2,
            minute2;
            var myInterval = setInterval(function() {
                let time = new Date();
                if (time.getHours().toString().length == 1) {
                    hour2 = `0${time.getHours()}`;
                    h.innerHTML = hour2;
                } else {
                    hour2 = (time.getHours() > 12)?time.getHours() - 12: time.getHours();
                    if (hour2.toString().length == 1) {
                        hour2 = `0${hour2}`;
                        h.innerHTML = hour2;
                    } else {
                        h.innerHTML = hour2;
                    }
                }
                if (time.getMinutes().toString().length == 1) {
                    minute2 = `0${time.getMinutes()}`;
                    m.innerHTML = minute2;
                } else {
                    minute2 = time.getMinutes()
                    m.innerHTML = minute2;
                }
                if (time.getSeconds().toString().length == 1) {
                    second2 = `0${time.getSeconds()}`;
                    s.innerHTML = second2;
                } else {
                    second2 = time.getSeconds();
                    s.innerHTML = second2;
                }

            },
                1000);
        }
