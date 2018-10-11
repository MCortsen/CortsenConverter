let OunceToGrams = 28.34952;

let GramToOunces = 0.03527396195;

let ResultOutput:HTMLDivElement = <HTMLDivElement> document.getElementById("ResultOutput");



document.getElementById("GramToOunce").addEventListener("click", () => GramToOunceFunc());

document.getElementById("OunceToGram").addEventListener("click", () => OunceToGramFunc());



function ConvertGramToOunce():number {

    let inputWeight:number = Number((<HTMLInputElement>document.getElementById("NumberText")).value);

    return inputWeight * GramToOunces;

}



function ConvertOunceToGram():number {

    let inputWeight:number = Number((<HTMLInputElement>document.getElementById("NumberText")).value);

    return inputWeight * OunceToGrams;

}



function GramToOunceFunc(){

    let result:number = ConvertGramToOunce();

    if (result > 0){

        ResultOutput.innerHTML = result.toString() + " Ounces";



    }



}



function OunceToGramFunc(){

    let result:number = ConvertOunceToGram();

    if (result > 0){

        ResultOutput.innerHTML = result.toString() + " Grams";

    }

}