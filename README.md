# Xiaomi Pitch

## 🔨 What it does

Our project is a customer billing and record handling software used by vendors of Xiaomi. When customer purchases an item from Mi Store, Mi Home, etc their purchasing data will be added to our database that help Xiaomi to record and analyse the customer purchase pattern.

## 💡 Application Workflow

1. User/Vendor first logs into the account using their Mi ID and password.

2. Then user/vendor provides details of:

   - Store Type (Mi Home, Mi Store, etc.)
   - Store Name
   - Point of Sales (POS) ID (ID associated with machine type)

3. Then we will store the details in session to use the application for API calls.

4. Now after logged in, the vendor will be seeing a dashboard in which he will be getting a list of all the past sales he made through his account. He can apply a filter on those dates too. Along with that, he will be seeing a button to create an entry for a new sale. The New Order form goes as follows:-

   - Step 1: Pick the product under the appropriate category (Bundle Sales, Smart Phone, TV & Laptop, Smart Home, Accessory). Enter the product details (color, size, etc.), the quantity, the delivery method (which will display the opportunity to fill out the client address if home delivery is chosen), the serial number (SN) of the product, and then click "Add to Cart."
   - Step 2: Complete the order's fundamental information, including the Operator ID (which is pre-filled) and the customer's contact information (name, phone number, email address, and preferred method of business communication) (WhatsApp or Email).
   - Step 3: Before submitting the order, the operator displays and checks the order summary (total amount, tax amount, etc.).
   - Step 4: Enter the received amount and finalize the payment by choosing the customer's selected payment method (Cash, UPI, Wallet, etc.).
   - Step 5: The payment success notification will be displayed. The customer will receive a receipt via email or WhatsApp. If necessary, a physical copy can be printed at the counter. Order information ought to be saved on the system.

5. Now furthermore to make it much easier to use for vendor and to remove the point of errors we will also add tooltips in front of every input field(Serial no, product details, etc.) just to make sure vendors inputs correct data, and we will also add multiple checks in this order form like:-
   - checking the size of Serial No to make sure it's correct.
   - checking the
6. We will add a search box in the product form so that the vendor can directly search for the desired product just to save time. After choosing a product he can select color size etc details.

## 🧩 How we are planning to build

We are planning to build this application using the MERN (MongoDB, Express, Reactjs, Nodejs)stack for web-app and React-Native for mobile-app. We will design our layout with the help of an online design tool called Figma. Then we start writing code after gathering all the information and resources.

## 🚀 What's next

The next thing could be automating the task to enter customer details to make it much easier to use for vendors. This could be done by adding voice search features and further can be improved by taking feedback from vendors.
