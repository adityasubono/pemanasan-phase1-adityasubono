/**
 * Carilah palindrome terpanjang dari sebuah string input.
 *
 * Demo:
 * Case 1
 * Input: 'banana'
 * Output: 'anana'
 *
 * Case 2
 * Input: 'ana'
 * Output: 'ana'
 *
 * Case3
 * Input: 'duyabbcsscbbauyd'
 * Output: 'abbcsscbba'
 *
 * @param {*} str = string input untuk dicari palindrome terpanjangnya
 */

function longestPalindrome(str) {
  // kode disini
    var maxlength=0;
    var final='';
    for(i=0; i<str.length; i++){
        var substring = str.substring(i, str.length);
        for(j=substring.length; j>=0; j--){
            var subs = substring.substring(0,j);
            var reverse = subs.split('').reverse().join('');
            if(reverse===subs){
                if(subs.length > maxlength){
                    maxlength= subs.length;
                    final=subs;
                }
            }
        }
    }
    console.log(final)
}

// Test Case
longestPalindrome('banana') // 'anana'
longestPalindrome('ana') // 'ana'
longestPalindrome('duyabbcsscbbauyd') // 'abbcsscbba'
