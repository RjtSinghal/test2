import * as express from 'express';
const Web3 = require('web3');
const  web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.infura.io/v3/5e66f831443940ed88e9adca82578c2b'));


import UserModel from '../models/userModel';
import { Messages } from './../util/message';
import AuthService from './../service/authService'

class UserController {
//    public latestBlock
//    public j 

//     constructor() {
//         this.latestBlock =  web3.eth.getBlockNumber()
//         this.j = this.latestBlock - 10000
//     }

    public async get(req: any, res: express.Response, next: express.NextFunction): Promise < any > {

        

        try {
            let latestBlock = await web3.eth.getBlockNumber()
            let data = await AuthService.blockData(latestBlock)
            // let j = latestBlock - 10000
            // let i,  count=0, k
            // let result = []
            console.log("111", latestBlock, data )
            // for (k=0; k<10; k++) {
                // let data = await setInterval(async function() 
                // {
                //         for (i = latestBlock; i > j; i-- ) {
                //             console.log("22222", latestBlock, j, i);
                //             let b = await web3.eth.getBlock(i, true)
                //             count = count+1
                //             result.push(b)
                //         }
                //         latestBlock = j
                //         j = j-50
                //         if (count >= 1000) {
                //             clearInterval(data)
                //             return res.status(200).json({cnt: count, result: result})
                //         }
                // }, 1000)
            // }

            
                // result = await web3.eth.getBlock(latestBlock, true);
                // count= count+1
                // if (count<10000) {
                //     latestBlock = latestBlock-1
                //   return result.push(await web3.eth.getBlock(latestBlock, true))
                // } else {
                //     return res.status(200).json({cnt: count, result: result})
                // }
              

            // console.log("cnt---", count)
            // getBlock
            // getBlockTransactionCount
            // getTransactionFromBlock

            // let result = await web3.eth.getBlock(15979351, true);
            return res.status(200).json({result: data})
        } 
        catch (err) {
            console.log("err", err.message)
            return res.status(500).json({"message":err})
        }
      
    }


    // public async blockData (blockNum) {
    //     // let latestBlock = await web3.eth.getBlockNumber() 
    //     let result = []
    //     let data = await web3.eth.getBlock( blockNum, true)
    //     result.push(data)
    //     if (blockNum< this.j)
    //         result.push(await this.blockData(blockNum-1))
    //     else 
    //         return result

    // } 


    public update(req: any, res: express.Response, next: express.NextFunction): void {

       
    }
 

}

export default new UserController();