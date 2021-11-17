//
//  EsLivingDetectionManager.h
//  EsLivingDetection
//
//  Created by ReidLee on 2020/12/23.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "EsLivingDetectResult.h"

NS_ASSUME_NONNULL_BEGIN

/**
 * 活体检测管理类
 */
@interface EsLivingDetectionManager : NSObject

/**
 * 认证初始化
 * @param livingType 认证类型
 * @return 初始化结果
 */
+ (EsLivingDetectResult*) verifyInit:(int) livingType;

/**
 * 开始执行活体检测
 * @param token 认证token
 * @param viewController 父容器
 * @param callback 认证结果回调代码块
 */
+ (void) startDetect: (NSString*) token viewController:(UIViewController*)viewController callback:(EsLivingDetectCallback) callback;

@end

NS_ASSUME_NONNULL_END
