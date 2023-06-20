import axios from "axios";

const GET_COMPANY_NAME_FOR_MANAGER =
  "http://localhost:8070/api/v1/company/";

class CompanyService {
  getCompanyName(companyId) {
    return axios.get(GET_COMPANY_NAME_FOR_MANAGER + companyId);
  }
}

export default new CompanyService();