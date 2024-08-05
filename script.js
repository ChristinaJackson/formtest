const myHeaders = new Headers();

let count = 0;
let successCount = 0;

myHeaders.append("sec-ch-ua", "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"");
myHeaders.append("Accept", "application/json, text/javascript, */*; q=0.01");
myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36");
myHeaders.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
myHeaders.append("Sec-Fetch-Site", "cross-site");
myHeaders.append("Sec-Fetch-Mode", "cors");
myHeaders.append("Sec-Fetch-Dest", "empty");
myHeaders.append("host", "webflow.com");
myHeaders.append("Cookie", "wf_exp_uniqueId=0b9ba277-d860-4a46-887f-cb5c82608983; wf_logout=1722608354955; wfsession=u_MmCQ9Z0Dds0R8MsSDLEA.3jpk4-Gkv_W9wYQbMkd_cC1DA31v14rZMlPMYg9JCHZ0czkKDrwU8pd3KjF2dKAME18TnmRzRBoc_WHyFi3Nnw.1723212071313.86400000.yyv02F6EM-658bGWZCu99ZMwI0YaTAwjd8iElbdnjmg");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow"
};

for (let i = 0; i < 20; i++) {
    const urlencoded = new URLSearchParams();
    urlencoded.append("dolphin", "false");
    urlencoded.append("elementId", "fbaea4c5-a7eb-fe0e-bd58-95f6b4a59884");
    urlencoded.append("fields[Email]", "frompostmanhttp@gmail.com");
    urlencoded.append("fields[Field]", `hello from vs code - no form site form submission ${count}`);
    urlencoded.append("fields[Name]", "From vscode https");
    urlencoded.append("name", "Email Form");
    urlencoded.append("pageId", "613a3f0f115dae547cef90fe");
    urlencoded.append("source", "https://christinas-noform-on-this-site.webflow.io/");
    urlencoded.append("test", "false");

    requestOptions.body = urlencoded;

    fetch("https://webflow.com/api/v1/form/66ad0d75f9791f4b7d57ea06", requestOptions)
      .then(response => {
        if (response.status === 200) {
          successCount++;
        }
        return response.text();
      })
      .then(result => {
        console.log('Result from iteration', i, ':', result);
        console.log('Successful sends:', successCount);
      })
      .catch(error => console.error('Error from iteration', i, ':', error));

    count++;
}
