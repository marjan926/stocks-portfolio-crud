import json

def lambda_handler(event, context):
    # Placeholder code to delete an item
    item_id = event['pathParameters']['id']
    return {
        'statusCode': 200,
        'body': json.dumps({'message': f'Item {item_id} deleted successfully'})
    }
