import requests
from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, csrf_protect





def index(request):
    # Fetch random fact from the first API
    response = requests.get('https://uselessfacts.jsph.pl/random.json?language=en')
    data = response.json()
    fact = data['text']

    # Fetch random user data from the Random User Generator API
    response2 = requests.get('https://randomuser.me/api/')
    user_data = response2.json()
    user = user_data['results'][0]

    
    # Fetch random dog image from the third API
    response3 = requests.get('https://dog.ceo/api/breeds/image/random')
    data3 = response3.json()
    dog = data3['message']

    # Fetch random activity from the fourth API
    response4 = requests.get('https://www.boredapi.com/api/activity')
    data4 = response4.json()
    activity = data4['activity']

    # Fetch random cat image from the Cat API
    response5 = requests.get('https://api.thecatapi.com/v1/images/search')
    data5 = response5.json()
    cat = data5[0]['url']

    # Fetch Unsplash images
    unsplash_images = get_unsplash_images()

    return render(request, 'index.html', {
        'fact': fact,
        'user': user,
        'dog': dog,
        'activity': activity,
        'cat': cat,
        #'unsplash_images': unsplash_images,
    })




# Define the function to fetch Unsplash images
def get_unsplash_images(photo_name=None):
    api_key = 'your_api_key_here'  # Replace 'your_api_key_here' with your actual Unsplash API key
    if photo_name:
        url = f'https://api.unsplash.com/photos/random?query={photo_name}&count=10&client_id={api_key}'
    else:
        url = f'https://api.unsplash.com/photos/random?query=beach&count=10&client_id={api_key}'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        image_urls = [photo['urls']['regular'] for photo in data]
        return image_urls
    else:
        # You may want to handle errors differently here
        return []



def search(request):
    if request.method == 'POST':
        photo_name = request.POST.get('photo', '')
        if photo_name:
            # Fetch images based on the input photo name from Unsplash API
            unsplash_images = get_unsplash_images(photo_name)
            return render(request, 'search_results.html', {'photo_name': photo_name, 'unsplash_images': unsplash_images})
        # return redirect('index')
    return render(request, 'search_form.html')





def beach_gallery(request):
    unsplash_images = get_unsplash_images('beach')  # Fetch beach images
    return render(request, 'beach_gallery.html', {'unsplash_images': unsplash_images})

def food_gallery(request):
    unsplash_images = get_unsplash_images('food')  # Fetch food images
    return render(request, 'food_gallery.html', {'unsplash_images': unsplash_images})



# Function to fetch random fact from the first API
def get_random_fact(request):
    response = requests.get('https://uselessfacts.jsph.pl/random.json?language=en')
    data = response.json()
    fact = data['text']
    return JsonResponse({'fact': fact})


# Function to fetch random user data from the Random User Generator API
def get_random_user(request):
    response = requests.get('https://randomuser.me/api/')
    data = response.json()
    user = data['results'][0]
    return JsonResponse({'user': user})

# Function to fetch random dog image from the Dog CEO API
def get_random_dog(request):
    response = requests.get('https://dog.ceo/api/breeds/image/random')
    data = response.json()
    dog = data['message']
    return JsonResponse({'dog': dog})

# Function to fetch random activity from the Bored API
def get_random_activity(request):
    response = requests.get('https://www.boredapi.com/api/activity')
    data = response.json()
    activity = data['activity']
    return JsonResponse({'activity': activity})

# Function to fetch random cat image from the Cat API
def get_random_cat(request):
    response = requests.get('https://api.thecatapi.com/v1/images/search')
    data = response.json()
    cat = data[0]['url']
    return JsonResponse({'cat': cat})


        
