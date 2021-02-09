var base64String;

export const onPhotoInput = (file, section, key) => {
    var reader = new FileReader();
    // console.log(base64String);
    const readSuccess = (e) => {
        //convert array buffer into base64 String to be used in displaying uploaded image
        base64String = btoa(String.fromCharCode(...new Uint8Array(e.target.result)));
        console.log(base64String.slice(0, 10));
        test(base64String);
    };

    reader.onload = readSuccess;
    //get ArrayBuffer from file
    reader.readAsArrayBuffer(file); 
    console.log("base64: ", base64String);
}

const test = (f) => {
    return f;
}
