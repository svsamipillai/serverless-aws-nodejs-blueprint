const AWS = require('@redbirdhq/aws-ome-sdk');

async function postItem(tableName, item) {
  const docClient = new AWS.DynamoDB.DocumentClient();
  await docClient.put({
    TableName: tableName,
    Item: item,
  }).promise();
  return item;
}

module.exports = {
  postItem,
};
