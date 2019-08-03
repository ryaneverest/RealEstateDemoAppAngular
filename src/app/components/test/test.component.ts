import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  array = [1, 1, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]
  result: any[] = [];
  ngOnInit() {
    this.vowelsAndConsonants("aeppiole");
    // this.selfDiving(1,22);
  }
   vowelsAndConsonants(s) {
     s = 'aeppiole';
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelLetter = [];
    var constantLetters = [];
    for (var j = 0; j < vowels.length; j++) {
      for (var i = 0; i < s.length; i++) {

            if (s[i] == vowels[j]) {
                vowelLetter.push(s[i]);
            } else {
                constantLetters.push(s[i]);
            }
        }
    }
    for (var k = 0; k < vowelLetter.length; k++) {
        console.log(vowelLetter[k]);
    }
    for (var i = 0; i < constantLetters.length; i++) {
        console.log(constantLetters[i]);
    }
}

}
