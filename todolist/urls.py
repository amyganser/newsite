from django.conf.urls import patterns, include, url
from . models import Task
from . import views
from django.db import models
from todolist.views import toggle_completed


urlpatterns = [
    url(r'^$', views.index, name='index'),
	url(r'^(?P<complete>[-\w]+)/(?P<id>[-\w\ ]+)/$', views.toggle_completed, name='toggle_completed'),
	
  ]
