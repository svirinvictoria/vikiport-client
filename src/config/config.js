import env from "react-dotenv";

console.log(env.SERVER_DOMAIN_URL);

const configData = {
  serverDomainUrl: env.SERVER_DOMAIN_URL
};



export default configData