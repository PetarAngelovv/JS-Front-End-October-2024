function Rotations(RotationArray,rotation){
    for(let i = 0; i < rotation;i++){
       RotationArray.push(RotationArray.shift());
    }
       console.log(RotationArray.join(' '))
}