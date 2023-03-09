        let par = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat earum, ullam omnis voluptatibus totam nam, et quae beatae sunt nulla labore optio repudiandae autem quaerat eaque quibusdam commodi. Ducimus. Tempore rem aliquam numquam quo maiores sint maxime possimus facere delectus minima blanditiis mollitia eveniet natus dolor, nobis sunt hic asperiores adipisci labore nemo ea! Ducimus, eos! Voluptatum, pariatur numquam. Minus dicta eos corrupti dolorem odio amet quos deleniti vero laborum omnis ex quam labore est tenetur repellat mollitia porro rerum, iusto totam, asperiores neque. Eaque nostrum tenetur aut. Numquam! Eaque non laboriosam placeat iusto tempore, ea est ducimus perspiciatis dolore quae, sapiente saepe quod nesciunt repudiandae laudantium porro minus quidem unde fugit ab harum! Itaque modi non ex repudiandae. Expedita neque accusantium voluptatum voluptates. Natus, esse et odio voluptate maxime dolore rem. Sapiente sed asperiores cupiditate esse voluptas saepe alias natus, facilis, iste sit consectetur explicabo quibusdam numquam voluptatibus! Harum ea aspernatur aut ipsum recusandae earum, fugiat accusamus repellat saepe, pariatur delectus dolorum quam maxime voluptates hic nemo corrupti laborum tempora est! Amet nostrum deleniti ad mollitia, blanditiis culpa. Dolore impedit itaque delectus similique ducimus? Alias similique quam ut. Veritatis, quia provident numquam illum dolor asperiores reprehenderit perspiciatis quidem maiores deleniti quibusdam itaque sed ab debitis dolorum vel quo. Dolor ad dolorem debitis officiis labore! Earum molestias quam distinctio vel sunt, ea veniam possimus, voluptatum incidunt omnis laborum laboriosam adipisci vitae, explicabo eius cum. Incidunt nemo voluptatibus blanditiis exercitationem? Veniam at dicta similique sed adipisci praesentium dolore aliquam earum. Qui illum adipisci error accusantium itaque magni reprehenderit ut, praesentium delectus vero aliquam vitae, temporibus maiores cum iure dolor veritatis! Reprehenderit tempore molestias tempora magnam corporis officiis, minus magni voluptates illum praesentium omnis iure ut voluptatibus sint. Ipsam numquam sequi consequatur delectus quis non provident optio, porro similique molestiae ratione!`;

        // ........................................................................

        // function warptext(paragraph) {

        //     let words = paragraph.split(" ");

        //     const maxCharsPerLine = 70;
        //     let warppedText = "";
        //     let currentLine = "";

        //     for (let i = 0; i < words.lenght; i++) {

        //         let word = words[i];
        //         if (currentLine.length + word.length > maxCharsPerLine) {
        //             warppedText += currentLine.trim() + '\n';
        //             currentLine = ""; 
        //         }
        //         currentLine += word + ' ';
        //     }

        //     warppedText += currentLine.trim();
        //     return warppedText;
        // }

        // let text = warptext(par);
        // console.log(text);
        // let content = document.querySelector('#content');
        // content.innerHTML = text;

        // .................................................................

        // function warptext(paragraph) {
        //     const maxLineLength = 70;
        //     let warppedText = "";

        //     while (paragraph.length > 0) {
        //         if (paragraph.length <= maxLineLength) {
        //             warppedText += paragraph;
        //             break;
        //         }

        //         let line = paragraph.substring(0, maxLineLength);
        //         let lastSpaceIndex = line.lastIndexOf(" ");

        //         if (lastSpaceIndex !== -1) {
        //             line = paragraph.substring(0, lastSpaceIndex);
        //         }

        //         warppedText += line.trim() + '\n';
        //         paragraph = paragraph.substring(line.length).trim();

        //     }
        //     return warppedText.trim();
        // }

        // ..........................................................................

        function warptext(paragraph, maxCharsPerLine) {

            const lines = [];
            while (paragraph.length > maxCharsPerLine) {
                let line = paragraph.substr(0, maxCharsPerLine);
                let lastSpaceIndex = line.lastIndexOf(" ");

                line = line.substr(0, lastSpaceIndex).trim();
                lines.push(line);
                paragraph = paragraph.substr(lastSpaceIndex).trim();

            }
            lines.push(paragraph);
            return lines.join("\n");
        }

        console.log(warptext(par,70));
