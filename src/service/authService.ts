const jwt = require('jsonwebtoken');
import { default as config } from '../env/index';

const Web3 = require('web3');
const  web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.infura.io/v3/5e66f831443940ed88e9adca82578c2b'));

class AuthService{

    public newToken(id: string): any{
        return jwt.sign({
            id: id
          },
          config.envConfig.JWT_SECRET
          );
    }


    /**
    * @description Generate email token with five min expiry time
    * @returns { String }
    */
    public emailToken (id: string) {
        return jwt.sign({
            id: id
          },
          config.envConfig.EMAIL_SECRET,
          {
              expiresIn: "5m"
          }
          );
    }


    public passwordToken (id: string) {
        return jwt.sign({
            id: id
          },
          config.envConfig.PASS_SECRET,
          {
              expiresIn: "5m"
          }
          );
    }

    public async blockData (blockNum) {
        // let result
        
        
        // let latestBlock = await web3.eth.getBlockNumber() 
        
        let result: {} [] = await web3.eth.getBlock( blockNum, true)
        // result.push(data)
        if (result.length < 10) {
            console.log("test---", blockNum,result);
            return  this.blockData(blockNum-1)
            // return result.push(await this.blockData(blockNum-1))
        }
        else {
            console.log("res-----", result)
            return result

        }
            

    }


}

export default new AuthService();