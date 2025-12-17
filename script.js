function task1(){ o1.innerText=t1.value.split(" ").reverse().join(" "); }
function task2(){ let s=t2.value; o2.innerText=s[0]+" "+s[2]+" "+s[3]+" "+s[s.length-1]; }
function task3(){ o3.innerText=t3.value.split(" ").reduce((a,b)=>a.length>b.length?a:b); }
function task4(){
    let r="";
    for(let c of t4.value){
        r+=c===c.toUpperCase()?c.toLowerCase():c.toUpperCase();
    }
    o4.innerText=r;
}
function task5(){ o5.innerText="Words: "+t5.value.trim().split(" ").length; }
function task6(){ o6.innerText=t6.value.trim().replace(/\s+/g," "); }

let arr=["Apple","Banana","Mango","Orange"];

function task7(){ o7.innerText=arr[2]; }
function task8(){ o8.innerText=[...new Set([1,2,2,3,3,4])]; }
function task9(){ alert(arr[arr.length-1]); }
function task10(){ let v=prompt("Enter value"); o10.innerText=arr.indexOf(v); }
function task11(){ o11.innerText=[1,2,3].map(x=>x*2); }
function task12(){ o12.innerText=["ram","shyam"].map(x=>x.toUpperCase()); }
function task13(){ let a=[1,2,3]; a.splice(1,1,9); o13.innerText=a; }
function task14(){ let a=[1,2,3]; a.splice(1,1); o14.innerText=a; }
function task15(){
    let a=+prompt("Enter A");
    let b=+prompt("Enter B");
    let op=prompt("Operation + - * /");
    o15.innerText=eval(a+op+b);
}
function task16(){ let a=t16.value.split(" "); o16.innerText=a[1]+" "+a[0]; }
function task17(){ o17.innerText=[...t17.value].reduce((s,d)=>s+ +d,0); }
function task18(){ o18.innerText=t18.value.split("").reverse().join(""); }
function task19(){
    let y=t19.value;
    o19.innerText=(y%4==0&&y%100!=0)||y%400==0?"Leap Year":"Not Leap Year";
}
function task20(){ o20.innerText=/^\d{10}$/.test(t20.value)?"Valid":"Invalid"; }
