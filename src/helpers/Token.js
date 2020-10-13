class Token{

    isValid(token){
     const payload = this.payload(token)
     if (payload) {
         //burda yoxlayiriqki bu token asagidaki url den gelib ya yox
       return  true 
     }
     return false
    }
   
    userType(token){
      const payload = this.payload(token)

      if (payload) {
        return payload.typ;
      }

      return '';
    }
   
    payload(token){
     const payload = token.split('.')[1]
     return this.decode(payload)
    }
   
    decode(payload){
     return JSON.parse(atob(payload))
    }
    
   
   
   }
   
   export default  new Token()