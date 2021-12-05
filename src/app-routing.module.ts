import { UserModule } from './app/bussiness/user/user.module';
import { RouterModule, Routes } from "@nestjs/core/router";
import { Module } from '@nestjs/common';

export const routes: Routes = [
    {
        path: 'user',
        module: UserModule
    }
];

@Module({
    imports: [RouterModule.register(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}