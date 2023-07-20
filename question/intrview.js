const input1={
    ABC:"abc",
    PQR:"pqr",
    LMN:"lmn",
    STU:"stu"
};
const input2=[{
    name:"ABC",
    value:10,
},
{
    name:"PQR",
    value:20,
},
{
    name:"LMN",
    value:30,
},
{
    name:"STU",
    value:40,
}
];

const output={
    abc:10,
    pqr:20,
    xyz:{
        lmn:30,
        stu:40,
    }
}







let object={};
input2.forEach((item)=>{
    if(input1[item.name].includes(".")){ //it gives my boolean value
        let updatedItems=input1[item.name].split(".");
        console.log(updatedItems);
        object[updatedItems[0]]={};//empty object xyz inside my out
        //if my xyz exist inside my object
        object[updatedItems[0]]? null : (object[updatedItems[0]]={});
        object[updatedItems[0]][updatedItems[1]]=item.value;

    }
    else
    object[input1[item.name]]=item.value;

})
console.log(object);