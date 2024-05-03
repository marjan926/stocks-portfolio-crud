import json

def lambda_handler(event, context):
    # Placeholder code to create an item
    body = json.loads(event['body'])
    item = {
        'id': '123',
        'name': body['name'],
        'description': body['description']
    }
    return {
        'statusCode': 200,
        'body': json.dumps(item)
    }
