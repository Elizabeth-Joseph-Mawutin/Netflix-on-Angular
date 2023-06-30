import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}

// function checkInput() {
//   const inputField: HTMLInputElement | null = document.getElementById("myInput") as HTMLInputElement;
//   const inputValue: string = inputField?.value ?? "";

//   if (inputValue === "") {
//     alert("Input field is empty!");
//   } else {
//     window.location.href = "https://www.netflix.com/signup/registration?locale=en-NG";
//   }
// };
