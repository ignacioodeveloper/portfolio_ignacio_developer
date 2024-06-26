
# views.py

from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import ContactForm

def index(request):
    message = ""
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            descripcion = form.cleaned_data['descripcion']
            # Envía el correo electrónico
            send_mail(
                f'Nuevo mensaje de {name}',  # Asunto
                f'Correo: {email}, Mensaje: {descripcion}',  # Mensaje
                email,  # De
                ['luisignaciocontacto@gmail.com'],  # A
                fail_silently=False,
            )
            message = "Gracias por contactarnos."

            return redirect('mensaje_enviado')
    else:
        form = ContactForm()

    return render(request, 'core/index.html', {'form': form, 'message': message})


def projects(request):
    return render(request, 'core/projects.html')

def mensaje_enviado(request):
    return render(request, 'core/mensaje_enviado.html')

def contact(request):
    return render(request, 'core/contact.html')

def about(request):
    return render(request, 'core/about.html')