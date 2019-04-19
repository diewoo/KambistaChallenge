import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './services/profile/profile.module';

@Module({
  imports: [ProfileModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
