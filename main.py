# from flask import Flask,render_template,request,redirect,url_for,Request,request,jsonify
# import pandas as pd
# import numpy as np
# app=Flask(__name__)
# @app.route('/search',methods=["GET",'POST'])

# def search():
#     print(request.form.get('type'))

#     df=pd.read_excel("全部.xlsx",sheet_name=type,usecols="B,c")
#     table=pd.DataFrame(df)
#     a=table.loc[0].tolist()
#     print(a)

   
#     return jsonify({"success":1,"product_list":a})

# def index():
#     return render_template('web.html')

# app.run()

# from flask import Flask,render_template
# app=Flask(__name__)
# @app.route("/")
# def index():
#     return render_template('web.html')
# app.run()

from flask import Flask
app=Flask(__name__,static_folder='static',static_url_path='/')
app.run()