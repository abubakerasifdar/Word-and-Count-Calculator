
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myCharactors();
                document.getElementById("input").value = "";
            }
        })
        function myCharactors() {
            let input = document.getElementById('input').value;
            let array = input.split('');
            let result = "";
            let count;
            let space = 0;
            let i = 0;
            do {
                count = i;
                i++
                if (array[i] == String.fromCharCode(32)) {
                    space += 1;
                    console.log(space, "This is the value of the space");
                }
                console.log(count);
            } while (i <= array.length)
            let TotalCharactors = count - space;
            let Keypressed = TotalCharactors + space;
            result = `Total Charactors are: ${TotalCharactors}`;
            console.log(space, "This is the total number of space brothers.");
            console.log(TotalCharactors, "This is the total number of charactors brothers.");
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').style.background = "brown"
            document.getElementById('output').innerHTML = result;

        } 
        function myWords(){
            let input = document.getElementById('input').value;
            let result = "";
            let wordseparator = String.fromCharCode(32);
            let array = input.split(wordseparator);
            console.log(array);
            let count;
            let i = 0;
            do {
                count = i;
                i++;
            } while (i <= array.length)
            let space = count - 1;
            result = ` Total Words are: ${count}.`;
            console.log(space, "This is the total number of space brothers.");
            console.log(count, "This is the total number of charactors brothers.");
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').style.background = "black"
            document.getElementById('output').innerHTML = result;

        }  
 