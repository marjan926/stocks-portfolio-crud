import json

def lambda_handler(event, context):
    # Placeholder code to update an item
    item_id = event['pathParameters']['id']
    body = json.loads(event['body'])
    item = {
        'id': item_id,
        'name': body['name'],
        'description': body['description']
    }
    return {
        'statusCode': 200,
        'body': json.dumps(item)
    }
