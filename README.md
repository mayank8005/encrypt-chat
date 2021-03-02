# encrypt-chat

To complete this asssignment I am using node js + socket IO as a backend server and React js as a frontend server

## Steps to start application
1. cd to `encrypt-chat-server`
2. Run `npm install`
3. Run `npm start`
4. Open new terminal
5. cd to `encrypt-chat-ui`
6. Run `npm install`
7. Run `npm start`

### After following above steps node server should be running in port 5000 and react should be running at port 3000

#### To store data I am maintaining an array in node server and on receiving each new message I am logging database value in terminal
In database all the value stored are encrypted and I am only storing numerical string that is generated using both key and message

#### Scenario 1:
User 1: pinged `hi` using key as `somekey`

User 2: set key as `wrongKey` 

##### Here message sent by user1 will be encrpyted and user 2 will recieve some crypted value

#### Scenario 2:
User 1: pinged `hi` using key as `key`

User 2: set key as `key`

##### Here user 2 will recieve message sent by user 1

