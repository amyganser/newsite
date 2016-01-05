from django.conf.urls import patterns, include, url
from . models import Task
from . import views
from django.db import models
from todolist.views import toggle_completed


urlpatterns = [
    url(r'^$', views.index, name='index'),
	url(r'^task_(?P<complete>/d)/(?P<id>\d)/$', views.toggle_completed, name='toggle_completed'),
  ]
