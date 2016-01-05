from django.template import loader
from django.http import HttpResponse
from todolist.models import Task
from django.shortcuts import render_to_response
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse

#def index(request):
#	latest_task_list = Task.objects.order_by('-pub_date')[:5]
#	template = loader.get_template('todolist/index.html')
#	output = ' '.join([t.task_text for t in latest_task_list])
#	return HttpResponse(output)

def index(request):

	items = Task.objects.order_by('pub_date')[:5]
	return render_to_response('todolist/index.html', {'items': items}) 

#def detail(request, complete):

#	completed = Task.objects.get(complete)

#	return render(request, 'todolist/index.html', {'complete':complete})

	
#def delete(request, task_pk):
#    query = Task.objects.get(pk=task_pk)
#    query.delete()
#    return HttpResponse("Deleted!")

def toggle_completed(request, complete, id):
	completed_task = Task.objects.filter(['complete', 'id'])
	completed_task.complete = not completed_task.complete
	completed_task.save()  #Commit the change to the database
	return HttpResponse("Got it!")
	#return  render_to_response('todolist/index.html', {'complete': 'complete'})