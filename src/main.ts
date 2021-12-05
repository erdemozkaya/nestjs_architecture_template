import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'src/app/core/extensions/string/string.extension';
import 'src/app/core/extensions/object/object.extension';
import { LoggingInterceptor } from './app/core/interceptor/logging.interceptor';
import { logger } from './app/core/middleware/logger.middleware';
import { PostInterceptor } from './app/core/interceptor/post.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  // REST Global configurations
  app.useGlobalInterceptors(new PostInterceptor());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.use(logger)

  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
