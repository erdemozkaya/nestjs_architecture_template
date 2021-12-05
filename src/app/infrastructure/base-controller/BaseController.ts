import { BadRequestException, Body, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { IService } from "src/app/core/persistence/IService";
import { FilterHelper } from "src/app/core/utilities/filterHelper";
import { DataResult } from "src/app/core/utilities/results/DataResult";
import { IResult } from "src/app/core/utilities/results/IResults";

export class BaseController<T> {
    private readonly _service:IService<T>;
    constructor(private readonly service: IService<T>){
        this._service = service;
    }

    @Post('getAll')
    async getAll(@Body() filter:FilterHelper<T>): Promise<DataResult<T[]>> {
      const res = await this._service.getAll(filter);
      if(res.success) return res;
      throw new BadRequestException(res);
    }
  
    @Get(':id')
    async getById(@Param('id') id: string): Promise<DataResult<T>> {
      const res = await this._service.getById(id);
      if(res.success) return res;
      throw new BadRequestException(res);
    }
  
    @Post('add')
    async add(@Body() user:T): Promise<DataResult<T>> {
      const res = await this._service.add(user);
      if(res.success) return res;
      throw new BadRequestException(res);
    }
  
    @Put('update')
    async update(@Body() user:T): Promise<DataResult<T>> {
      const res = await this._service.update(user);
      if(res.success) return res;
      throw new BadRequestException(res);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<IResult> {
      const res = await this._service.delete(id);
      if(res.success) return res;
      throw new BadRequestException(res);
    }
}