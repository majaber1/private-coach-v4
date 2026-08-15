from datetime import datetime
from pydantic import BaseModel,EmailStr,Field
class Register(BaseModel): name:str;email:EmailStr;phone:str|None=None;password:str=Field(min_length=8);role:str='client'
class Login(BaseModel): email:EmailStr;password:str
class CoachOut(BaseModel):
    id:int;slug:str;name:str;name_ar:str;specialty:str;specialty_ar:str;city:str;district:str;price:int;verified:bool;home:bool;gym:bool;outdoor:bool;online:bool;rating:float;review_count:int
    model_config={'from_attributes':True}
class BookingCreate(BaseModel): coach_id:int;mode:str;scheduled_at:datetime;city:str|None=None;district:str|None=None;address:str|None=None
class ReviewCreate(BaseModel): booking_id:int;rating:int=Field(ge=1,le=5);comment:str=Field(min_length=3,max_length=1200)
