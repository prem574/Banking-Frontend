const BASE_URL = 'http://localhost:8088/accounts';

class AccountService {
    static async getAllAccounts() {
        try {
          const response = await fetch(`${BASE_URL}/accounts`);
          const data = await response.json();
          return data;
        } catch (error) {
          console.error(error);
        }
      }
    }
    
    export default AccountService;
    
    
    
    
