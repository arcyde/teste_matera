import requests
from behave import *

BASE_URL = "https://catfact.ninja"

@given('I am making a GET request to the "/breeds" endpoint')
def step_given_url(context):
    context.url = f"{BASE_URL}/breeds"
    context.response = None

@when('I send the request')
def step_when_send_request(context):
    context.response = requests.get(context.url)

@then('I should receive a "200 OK" response')
def step_then_status_code(context):
    assert context.response.status_code == 200

@then('the response body should contain a list of cat breeds')
def step_then_response_body(context):
    response = context.response.json()
    assert 'data' in response
    assert isinstance(response['data'], list)
    assert len(response['data']) > 0
    
####################################################################

@given('I am making a GET request to the "/invalid-route" endpoint')
def step_given_invalid_url(context):
    context.url = f"{BASE_URL}/invalid-route"
    context.response = None

@when('I send the invalid request')
def step_when_send_invalid_request(context):
    context.response = requests.get(context.url)

@then('I should receive a "404 Not Found" response')
def step_then_invalid_status_code(context):
    assert context.response.status_code == 404