import api from "@forge/api";

const buildOutput = (rnd) => ({
  body: '{"Have a": "nice day!"}',
  headers: {
    "Content-Type": ["application/json"],
    "X-Request-Id": ["rnd-${rnd}"]
  },
  statusCode: 200,
  statusText: "OK"
});

const createInventoryIssue = async (summary, description) => {
console.log("Hello from main()!");

  // const userIdResponse = await api
  //   .asUser()
  //   .requestJira("/rest/api/3/myself", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //     scopes: "read:jira-user"
  //   });
console.log("I made it here!");

//   const userIdResponseBody = await userIdResponse.json();
// //  const obj = JSON.parse(userIdResponseBody.accountId);
// console.log("I made it this far!");
// console.log(userIdResponseBody.accountId);

  const response = await api
    .asApp()
    .requestJira("/rest/api/2/issue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: {
          project: { key: 'II' },
          issuetype: { id: '10001' },
          reporter: { id: '5c425535a0376d4fe1e641bf' },
          assignee: { id: '5c425535a0376d4fe1e641bf' },
          summary: summary,
          description: description
        }
      })
    });

  const responseBody = await response.json();
  console.log(responseBody);
};

exports.runAsync = (req) => {
  const obj = JSON.parse(req.body);
  createInventoryIssue(obj.summary, obj.description);

  return new Promise((resolve) => {
    setTimeout(() => {
      const result = buildOutput(Math.random());
      resolve(result);
    }, 1000);
  });
};
