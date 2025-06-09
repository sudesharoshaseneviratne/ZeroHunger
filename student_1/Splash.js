var seconds=5
            function displaySeconds()
            {
                seconds -=1
                document.getElementById("displaySeconds").innerText="This page will be redirect in "+seconds+" Seconds"
            }
            setInterval(displaySeconds,1000)
            function redirectpage()
            {
                window.location="../student_2/Home.html"
            }
            setTimeout ("redirectpage()",5000)