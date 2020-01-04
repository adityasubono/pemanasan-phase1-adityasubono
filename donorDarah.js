/**
 * ///////////
 * Donor Darah
 * ///////////
 *
 * Anda akan mensimulasikan suatu rumah sakit dengan daftar golongan darah beserta nama pasien yang memiliki golongan darah tersebut.
 * Wajib menggunakan modular function untuk solve soal ini.
 */

var bloodTypeInfo = {
    A: ['Olive', 'Queen', 'Scala', 'Uranium', 'Wick', 'Yongki'],
    B: ['Nancy', 'Patrick', 'Rust', 'Tesla', 'Vans', 'Xavier'],
    AB: ['Bolt', 'Daniel', 'Frans', 'Hans', 'Jack', 'Laura'],
    O: ['Alan', 'Charly', 'Ester', 'George', 'Intan', 'Mona', 'Zend']
};

// Release 0 - Get Type dari golongan darah orang yang diinput

function getType(person) {
    // kode disini
    var golongan_darah = [];
    var goldar='';
    for(m=0; m<Object.keys(bloodTypeInfo).length; m++){
        golongan_darah.push(Object.keys(bloodTypeInfo)[m])
    }

    for(l=0; l<golongan_darah.length; l++){
        for(i=0; i<bloodTypeInfo[golongan_darah[l]].length;i++){
            if(person===bloodTypeInfo[golongan_darah[l]][i]){
                goldar = golongan_darah[l]
            }
        }
    }
    if(goldar===''){
        return null
    } else {
        return goldar
    }
}

console.log('Release 0\n==========');
console.log(getType('Bolt')); // 'AB'
console.log(getType('Charly')); // 'O'
console.log(getType('Nancy')); // 'B'
console.log(getType('Bolt')); // 'AB'
console.log(getType('Sule')); // null
console.log();

// Release 1 - canDonor

/**
 * Anda harus mensimulasikan suatu sistem rumah sakit dimana akan ada fungsi pengecekan kecocokan golongan darah antara pendonor dan penerima dengan syarat sebgai berikut:
 * A = A, AB (A dapat mendonor ke gol darah A dan AB)
 * B = B, AB
 * AB = AB (AB adalah penerima universal)
 * O = A, B, AB, O (O adalah Donor universal)
 *
 * Notes:
 * @param Recepient adalah orang yang menerima donor.
 * @param Donor adalah pendonor.
 * Wajib menggunakan function getType.
 */

function canDonor(recepient, donor) {
    // kode disini
    var type_donor= getType(donor);
    var type_recep= getType(recepient);

    if(type_donor ==='O'){
        return true;
    }

    if(type_donor==='A'){
        return type_recep === 'A' || type_recep === 'AB';
    }

    if(type_donor==='B'){
        return type_recep === 'B' || type_recep === 'AB';
    }

    if(type_donor==='AB'){
        return type_recep === 'AB' || false;
    }

}

console.log('Release 1\n==========');
console.log(canDonor('Bolt', 'Alan')); // true
console.log(canDonor('Charly', 'Olive')); // false
console.log(canDonor('Nancy', 'Patrick')); // true
console.log(canDonor('Bolt', 'Alan')); // true
console.log(canDonor('Charly', 'Daniel')); // false
console.log();

// Release 2 - transfussionProcess

/**
 * Implementasikan function transfusionProcess, yang akan menerima parameter
 *
 * @param recipients daftar orang penerima
 * @param  donors 	daftar orang pendonor
 *
 * Fungsi ini akan mencari pendonor yang cocok dari masing-masing penerima dengan syarat pendonor hanya bisa mendonorkan darahnya sekali saja.
 *
 * Notes:
 * Kalian tidak harus memikirkan optimisasi golongan darah.
 * Wajib menggunakan function canDonor.
 */

function transfusionProcess(recepients, donors) {
    // kode disini
    var hasil = [];
    var final = '';
    for (n = 0; n < donors.length; n++) {
        // hasil.push(canDonor(recepients[n], donors[n]));
            // console.log('tranfusi',recepients[n]);
            if(canDonor(recepients[n], donors[n]) === true) {
                final+=(recepients[n] + ' menerima donor dari ' + donors[n]+'\n')
            } else if(canDonor(recepients[n], donors[n])=== false){
                final+=(recepients[n]+' tidak selamat'+'\n')
            }
    }
    if(recepients.length > donors.length){
        final+=(recepients[recepients.length-1]+' tidak selamat'+'\n')
    }
    return final;
}

console.log('Release 2\n==========');
console.log(transfusionProcess(['Bolt', 'Queen'], ['Alan', 'Tesla']));

/*
  Bolt menerima donor dari Alan
  Queen tidak selamat
*/

console.log('-------------------------------');

console.log(
    transfusionProcess(
        ['Nancy', 'Frans', 'Scala', 'Alan'],
        ['Ester', 'Bolt', 'Rust']
    )
);

/*
  Nancy menerima donor dari Ester
  Frans menerima donor dari Bolt
  Scala tidak selamat
  Alan tidak selamat
*/
