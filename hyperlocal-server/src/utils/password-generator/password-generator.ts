export function generateRandomPassword(length: number):string {
    const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericCharacters = "0123456789";
    const specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    let password = "";
    let charset = "";
    

    password += lowercaseCharacters.charAt(Math.floor(Math.random() * lowercaseCharacters.length));
    password += uppercaseCharacters.charAt(Math.floor(Math.random() * uppercaseCharacters.length));
    password += numericCharacters.charAt(Math.floor(Math.random() * numericCharacters.length));
    password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    

    for (let i = 4; i < length; i++) {

      const randomIndex = Math.floor(Math.random() * 4);
      switch (randomIndex) {
        case 0:
          charset = lowercaseCharacters
          break;
        case 1:
          charset = uppercaseCharacters;
          break;
        case 2:
          charset = numericCharacters;
          break;
        case 3:
          charset = specialCharacters;
          break;
        default:
          break;
      }

      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return password;
}