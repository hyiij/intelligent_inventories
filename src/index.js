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

const createInventoryIssue = async (summary, description, USER_ID) => {
  const response = await api
    .asApp()
    .requestJira("/rest/api/2/issue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: {
          project: { key: 'II' },
          issuetype: { id: '10001' },
          reporter: { id: USER_ID },
          assignee: { id: USER_ID },
          summary: summary,
          description: description
        }
      })
    });

  const responseBody = await response.json();
};

exports.runAsync = (req) => {
  const USER_ID = process.env.USER_ID;
  if(!USER_ID)
  {
    console.log("USER_ID is not set!  Please review the README instructions.");
    return;
  }

  const obj = JSON.parse(req.body);
  createInventoryIssue(obj.summary, obj.description, USER_ID);

  console.log("Thank you for using the Intelligent Inventories app!");

  return new Promise((resolve) => {
    setTimeout(() => {
      const result = buildOutput(Math.random());
      resolve(result);
    }, 1000);
  });
};
