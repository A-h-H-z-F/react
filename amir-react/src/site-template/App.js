import $ from 'jquery';
import React  from "react";
import Layout from "./Layout";
import Fruits from "./Fruits";
import "../template-style/ChoosenFruit.css"

export default function App() {
   const GetFruit=Fruits();
   const GetFruitArray = GetFruit.split("");
   var NumberOfMistakes = 0;

   const WordsItemsGetFruitArray =GetFruitArray.map((word) =>
   <button key={(word.charCodeAt(word)*(GetFruitArray.indexOf(word)+11573))}
       type="button" className="btn btn-info m-1 my-3 DisableClick  VisibleButton" >{word}</button>);


  return (
      <Layout>

          {picture()}
          {WordsItemsGetFruitArray}

          {Words()}
          <div className="row justify-content-center LastDiv">
             <div className="col-4 EndGame">
                You have  <code className="ChangeNumber">{5-NumberOfMistakes}</code> mistakes !!
             </div>
             <div className="Return">
             </div>

           </div>
      </Layout>
  );


   function picture(){
       return(

          <div className="border PictureDiv-6">

              <div className="PictureDiv-1-1 FerstMistake">
                <img src="Image-Icon/ground.png" className="PictureDiv-1-2" alt="Responsive image"/>
              </div>

              <div className="PictureDiv-1-1 Second1Mistake">
                <img src="Image-Icon/pngwingcom11.png" className="PictureDiv-2-2" alt="Responsive image"/>
              </div>

              <div className="PictureDiv-1-1 ThirdMistake">
                <img src="Image-Icon/pngwingcom2.png" className="PictureDiv-3-2" alt="Responsive image"/>
              </div>

              <div className="PictureDiv-1-1 FourthMistake">
                <img src="Image-Icon/gibbetcom.svg" className="PictureDiv-4-2" alt="Responsive image"/>
              </div>

              <div className="PictureDiv-1-1 FifthMistake">
                <img src="Image-Icon/cartoon5.png" className="PictureDiv-5-2" alt="Responsive image"/>
              </div>

         </div>
      )
    }


    function CompareButtonClickedSelectedFruit(asd){
       if (GetFruit.search(asd)==0 || GetFruit.search(asd.toLowerCase())>0){

           $(`.VisibleButton:contains(${asd})`).removeClass( "VisibleButton" );
           $(`.AbleClick:contains(${asd})`).removeClass("btn-outline-warning").addClass( "btn-success DisableClick" );

           $(`.VisibleButton:contains(${asd.toLowerCase()})`).removeClass( "VisibleButton" );
           $(`.AbleClick:contains(${asd})`).removeClass("btn-outline-warning").addClass( "btn-success DisableClick" );

           new Audio("Sound/true1.mp3").play();

           if (!$( "button" ).hasClass( "VisibleButton" )){

             $(".EndGame").text("You Win This Game !!").removeClass("col-4").addClass("col-2 text-success fw-bolder").css('margin-top',"8px");;
             $(".AbleClick").addClass( "DisableClick" );
             $(".LastDiv").addClass( "mt-2" );
             $(".Return").text("Return").addClass(" col-1 btn btn-outline-light").click(function () {
               window.location.reload();});

             new Audio("Sound/true5.mp3").play();

           }

          }else{
            NumberOfMistakes = NumberOfMistakes + 1 ;
            $(".ChangeNumber").text( 5 - NumberOfMistakes );
            $(`.AbleClick:contains(${asd})`).removeClass("btn-outline-warning").addClass( "btn-danger DisableClick" );
            new Audio("Sound/error1.mp3").play();


            switch (NumberOfMistakes) {

              case 1:
              $(".FerstMistake").removeClass( "PictureDiv-1-1" );
                break;

              case 2:
              $(".Second1Mistake").removeClass( "PictureDiv-1-1" );
                break;

              case 3:
              $(".ThirdMistake").removeClass( "PictureDiv-1-1" );
                break;

              case 4:
              $(".FourthMistake").removeClass( "PictureDiv-1-1" );
                break;

              case 5:

              $(".FifthMistake").removeClass( "PictureDiv-1-1" );
              $(".AbleClick").removeClass("btn-outline-warning").addClass( "btn-danger DisableClick" );
              $(".VisibleButton").removeClass( "VisibleButton" );
              $(".LastDiv").addClass( "mt-2" );
              $(".EndGame").text("Game over !!").removeClass("col-4").addClass("col-2 text-danger fw-bolder").css('margin-top',"8px");
              $(".Return").text("Return").addClass(" col-1 btn btn-outline-light").click(function () {
                window.location.reload();});

              new Audio("Sound/error5.mp3").play();


                break;
            }
          }


      }



      function Words (){

         const words10 = ["A","B","C","D","E","F","G","H","I","J"]
         const words9 = ["K","L","M","N","O","P","Q","R","S"]
         const words7 = ["T","U","V","W","X","Y","Z"]


         const WordsItems10 =words10.map((word10) =>
         <button key={word10.charCodeAt(word10)*131} type="button"  onClick={() => { CompareButtonClickedSelectedFruit(word10);}} className="btn btn-outline-warning m-1 AbleClick">
            {word10}</button>)

         const WordsItems9 =words9.map((word9) =>
         <button key={word9.charCodeAt(word9)*98} type="button"  onClick={() => { CompareButtonClickedSelectedFruit(word9);}} className="btn btn-outline-warning m-1 AbleClick">
            {word9}</button>);

         const WordsItems7 =words7.map((word7) =>
         <button key={word7.charCodeAt(word7)*264} type="button"  onClick={() => { CompareButtonClickedSelectedFruit(word7);}}  className="btn btn-outline-warning m-1 mb-0 AbleClick">
            {word7}</button>);

         return (

           <div className="container text-center">

              <div className="row">
                <div className="col">
                  {WordsItems10}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  {WordsItems9}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  {WordsItems7}
                </div>
              </div>
        </div>)
        }


}
