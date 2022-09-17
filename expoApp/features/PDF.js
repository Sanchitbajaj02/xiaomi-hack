import dateFormat, { masks } from "dateformat";
import { ProductList } from "../ProductList";

function GetTime(date) {
  var hours = parseInt(dateFormat(date, "hh"));
  var minutes = parseInt(dateFormat(date, "MM"));
  var ampm = hours >= 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
const GetProductName = (product) => {
  return ProductList.find((i) => i._id === product).productName;
};

const PdfCode = (
  name,
  Mobile_No,
  Email,
  Address,
  State,
  City,
  Postal,
  product,
  Total,
  ReceivedBalance,
  PaymentType,
  RemainingBalance,
  Invoice
) => `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body >
    <div style="min-height: auto;
    width: 100%;
    height : 97vh;
    border: solid 2px #000;"  >
    <div style="height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    /* padding: 20px; */
    justify-content: center;
    align-items: center;">
    <div class="data-title">
        <div style="display: flex;
        justify-content:center;
        font-size: 2rem;  
        padding-left: 20px;">Tax Invoice<br></div>
    </div>
   
    </div>
    <hr />
        <hr/>
        <div style="
        width: 100%;
        height: auto;
        padding: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        ">
            <div style="
            width: 50%;
            align-items: flex-start;
            ">
                <p class="invoice-user">
                    <b>Bill To</b> : <br/>
                    Name : ${name} <br/>
                    Phone No : +91 ${Mobile_No}<br/>
                    Email : +91 ${Email}<br/>
                    Address : ${Address} <br/>
                    State : ${State} <br/>
                    City : ${City} <br/>
                    ZIP : ${Postal}<br/>
                </p>
            </div>
            <div style="align-items: flex-end;">
                <p>Invoice No : ${Invoice}<br/>
                Date : ${dateFormat(Date.now(), "dd-mm-yyyy")}<br/>
                Time :${GetTime(new Date())}</p>
                <br/>
                <br/>
                <p>Mobile No :- <br/>
                +91 8208553219<br/>
                +91 9309780761
                </p>
            </div>
        </div>
        <hr/>
        <hr/>
        <div style="height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;">
            <table style="width:100%; border-collapse: collapse;">
                <tr style="background-color: rgba(255, 0, 62, 0.8); color: white;">
                  <th style="height: 30px;">Index</th>
                  <th style="height: 30px;">Product Name</th>
                  <th style="height: 30px;">Color</th>
                  <th style="height: 30px;">Quantity</th>
                  <th style="height: 30px;">Total</th>
                </tr>
                ${product.map((val, idx) => {
                  return `<tr style="background-color: rgba(246, 221, 178, 0.8);">
                    <td style="text-align: center;height: 30px;">${idx + 1}</td>
                    <td style="text-align: center;height: 30px;">${GetProductName(
                      val.productId
                    )}</td>
                    <td style="text-align: center;height: 30px;">${
                      val.color
                    }</td>
                    <td style="text-align: center;height: 30px;">1</td>
                    <td style="text-align: center;height: 30px;">₹ ${
                      val.price
                    }</td>
                  </tr>`;
                })}
                
               
              </table>
              
                <!-- <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Received balance :  1</div>
          
              <hr/>
              <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Grand Total : 1</div>
              <hr/>
              <div style="align-self: flex-end;margin-right: 10px;font-style: bold;">Payment Mode : Cash</div>
              <hr/> -->
              <div style="width:100%;align-self: flex-end; display: flex; flex-direction: row;">
                <div style="width:40%"></div>
                  <table style="width: 50%; align-self: flex-end;">
                  <tr>
                  <th style="text-align: start;">Grand Total : </th>
                  <td style="text-align: center;height: 30px;">₹ ${Total}</td>
              </tr>
                        <tr style="border-bottom: solid ;">
                            <th style="text-align: start;">Received Balance : </th>
                            <td style="text-align: center;height: 30px;">₹ ${ReceivedBalance}</td>
                        </tr>
                       
                        <tr style="border-bottom: solid ;">
                        <th style="text-align: start;">Remaining Balance : </th>
                        <td style="text-align: center;height: 30px;">₹ ${RemainingBalance}</td>
                    </tr>
                        <tr>
                            <th style="text-align: start;">Payment Method: </th>
                            <td style="text-align: center;height: 30px;">${PaymentType}</td>
                        </tr>
                  </table>
              </div>
        </div>
        <hr/>
        <hr/>
        <div style="height:auto; display:flex; justify-content:center;">
            <p>Thank You For Visiting <br/>
            </p>
        </div>
    </div>
  </body>
</html>
`;

const style = `
    .container {
      margin : 15px;
      border : solid 2px #000
    }
`;

export { PdfCode };
