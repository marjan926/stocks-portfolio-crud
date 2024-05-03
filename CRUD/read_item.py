import json

def lambda_handler(event, context):
    # Placeholder code to read an item
    item_id = event['pathParameters']['id']
    item = {
        'id': item_id,
        'name': 'Sample Item',
        'description': 'This is a sample item'
    }
    return {
        'statusCode': 200,
        'body': json.dumps(item)
    }
